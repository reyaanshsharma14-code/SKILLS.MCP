import 'package:flutter/material.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          // Sidebar
          Container(
            width: 250,
            color: const Color(0xFF1E293B),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(24.0),
                  child: Text(
                    'SMARTGOV AI',
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                      letterSpacing: 1.2,
                    ),
                  ),
                ),
                _buildNavItem(Icons.dashboard, 'Super Admin', true),
                _buildNavItem(Icons.electric_bolt, 'Electricity', false),
                _buildNavItem(Icons.water_drop, 'Water', false),
                _buildNavItem(Icons.recycling, 'Waste', false),
                _buildNavItem(Icons.people, 'Citizens', false),
                const Spacer(),
                _buildNavItem(Icons.settings, 'Settings', false),
              ],
            ),
          ),
          // Main Content
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(32.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Super Admin Dashboard',
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 24),
                  // Risk Cards
                  LayoutBuilder(
                    builder: (context, constraints) {
                      int crossAxisCount = constraints.maxWidth > 800 ? 4 : 2;
                      return GridView.count(
                        crossAxisCount: crossAxisCount,
                        crossAxisSpacing: 16,
                        mainAxisSpacing: 16,
                        shrinkWrap: true,
                        childAspectRatio: 1.5,
                        physics: const NeverScrollableScrollPhysics(),
                        children: const [
                          _StatCard(
                            title: 'Overall Risk',
                            value: 'Low',
                            color: Colors.green,
                            icon: Icons.shield,
                          ),
                          _StatCard(
                            title: 'Electricity Risk',
                            value: 'Medium',
                            color: Colors.orange,
                            icon: Icons.electric_bolt,
                          ),
                          _StatCard(
                            title: 'Water Risk',
                            value: 'Low',
                            color: Colors.green,
                            icon: Icons.water_drop,
                          ),
                          _StatCard(
                            title: 'Waste Risk',
                            value: 'High',
                            color: Colors.red,
                            icon: Icons.recycling,
                          ),
                        ],
                      );
                    }
                  ),
                  const SizedBox(height: 32),
                  const Text(
                    'Recent Alerts',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w600,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  _buildAlertList(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavItem(IconData icon, String title, bool isSelected) {
    return Container(
      color: isSelected ? Colors.blueAccent.withOpacity(0.1) : Colors.transparent,
      child: ListTile(
        leading: Icon(
          icon,
          color: isSelected ? Colors.blueAccent : Colors.white70,
        ),
        title: Text(
          title,
          style: TextStyle(
            color: isSelected ? Colors.blueAccent : Colors.white70,
            fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
          ),
        ),
        onTap: () {},
      ),
    );
  }

  Widget _buildAlertList() {
    final alerts = [
      {'title': 'Transformer Overheating', 'dept': 'Electricity', 'risk': 'High', 'time': '2 mins ago'},
      {'title': 'Water Pipe Leakage detected', 'dept': 'Water', 'risk': 'Medium', 'time': '1 hour ago'},
      {'title': 'Garbage Overflow in Ward 5', 'dept': 'Waste', 'risk': 'High', 'time': '3 hours ago'},
    ];

    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: alerts.length,
      separatorBuilder: (context, index) => const Divider(color: Colors.white12),
      itemBuilder: (context, index) {
        final alert = alerts[index];
        final isHigh = alert['risk'] == 'High';
        return ListTile(
          contentPadding: EdgeInsets.zero,
          leading: Icon(
            Icons.warning_amber_rounded,
            color: isHigh ? Colors.red : Colors.orange,
          ),
          title: Text(alert['title']!, style: const TextStyle(color: Colors.white)),
          subtitle: Text('${alert['dept']} • ${alert['time']}', style: const TextStyle(color: Colors.white70)),
          trailing: Chip(
            label: Text(alert['risk']!),
            backgroundColor: isHigh ? Colors.red.withOpacity(0.2) : Colors.orange.withOpacity(0.2),
            side: BorderSide.none,
            labelStyle: TextStyle(color: isHigh ? Colors.red : Colors.orange),
          ),
        );
      },
    );
  }
}

class _StatCard extends StatelessWidget {
  final String title;
  final String value;
  final Color color;
  final IconData icon;

  const _StatCard({
    required this.title,
    required this.value,
    required this.color,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withOpacity(0.3), width: 1),
        boxShadow: [
          BoxShadow(
            color: color.withOpacity(0.05),
            blurRadius: 10,
            spreadRadius: 2,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: color, size: 28),
          const SizedBox(height: 12),
          Text(
            title,
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 14,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            value,
            style: TextStyle(
              color: color,
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}
